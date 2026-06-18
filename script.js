const leadForm = document.getElementById('leadForm');
const jobForm = document.getElementById('jobForm');
const projectForm = document.getElementById('projectForm');
const galleryGrid = document.getElementById('galleryGrid');
const projectMessage = document.getElementById('projectMessage');
const chatMessages = document.getElementById('chatMessages');
const chatTabs = document.querySelectorAll('.chat-tab');
const leadList = document.getElementById('leadList');
const jobList = document.getElementById('jobList');
const leadPanel = document.getElementById('leadPanel');
const jobPanel = document.getElementById('jobPanel');

const showMessage = (element, text) => {
  element.textContent = text;
};

const saveProjects = (projects) => {
  localStorage.setItem('santosProjects', JSON.stringify(projects));
};

const loadProjects = () => {
  const stored = localStorage.getItem('santosProjects');
  return stored ? JSON.parse(stored) : [];
};

const saveLeadResults = (items) => {
  localStorage.setItem('santosLeadResults', JSON.stringify(items));
};

const loadLeadResults = () => {
  const stored = localStorage.getItem('santosLeadResults');
  return stored ? JSON.parse(stored) : [];
};

const saveJobResults = (items) => {
  localStorage.setItem('santosJobResults', JSON.stringify(items));
};

const loadJobResults = () => {
  const stored = localStorage.getItem('santosJobResults');
  return stored ? JSON.parse(stored) : [];
};

const renderGallery = () => {
  const projects = loadProjects();
  galleryGrid.innerHTML = '';

  if (projects.length === 0) {
    galleryGrid.innerHTML = '<div class="gallery-card"><h3>No projects uploaded yet</h3><p>Add new work to populate your luxury portfolio.</p></div>';
    return;
  }

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    galleryGrid.appendChild(card);
  });
};

const addProject = (title, description, imageData) => {
  const projects = loadProjects();
  projects.unshift({ title, description, image: imageData, createdAt: new Date().toISOString() });
  saveProjects(projects);
  renderGallery();
};

const formatDate = (date) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

const addChatBubble = (text, isUser = false) => {
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${isUser ? 'user' : 'bot'}`;
  bubble.textContent = text;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

const updateResults = () => {
  const leadResults = loadLeadResults();
  const jobResults = loadJobResults();

  leadList.innerHTML = '';
  jobList.innerHTML = '';

  if (leadResults.length === 0) {
    leadList.innerHTML = '<li>No homeowner leads yet. Run the Lead Scout to begin.</li>';
  } else {
    leadResults.slice(0, 10).forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${item.name}</strong><span>${item.project} — ${item.location}</span>`;
      leadList.appendChild(li);
    });
  }

  if (jobResults.length === 0) {
    jobList.innerHTML = '<li>No worker leads yet. Run the Job Scout to begin.</li>';
  } else {
    jobResults.slice(0, 10).forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${item.name}</strong><span>${item.role} — ${item.experience}</span>`;
      jobList.appendChild(li);
    });
  }
};

const addLeadResult = (lead) => {
  const items = loadLeadResults();
  items.unshift(lead);
  saveLeadResults(items);
  updateResults();
};

const addJobResult = (job) => {
  const items = loadJobResults();
  items.unshift(job);
  saveJobResults(items);
  updateResults();
};

const switchTab = (mode) => {
  chatTabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.mode === mode);
  });
  leadPanel.classList.toggle('hidden', mode !== 'lead');
  jobPanel.classList.toggle('hidden', mode !== 'job');
};

chatTabs.forEach((tab) => {
  tab.addEventListener('click', () => switchTab(tab.dataset.mode));
});

leadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('leadName').value.trim();
  const email = document.getElementById('leadEmail').value.trim();
  const project = document.getElementById('leadProject').value;

  if (!name || !email || !project) {
    addChatBubble('Please complete all fields to activate the Lead Scout.', true);
    return;
  }

  addChatBubble(`Lead Scout requested for ${project} by ${name}.`, true);
  addChatBubble('Scanning affluent residential and commercial demand for premium stucco and painting upgrades...', false);

  setTimeout(() => {
    const lead = {
      name,
      project,
      location: 'Exclusive estate / luxury hotel zone',
      receivedAt: new Date().toISOString(),
    };
    addLeadResult(lead);
    addChatBubble(`Done. A premium lead list entry has been added. View it in the Homeowner Leads column.`, false);
    leadForm.reset();
  }, 1400);
});

jobForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('jobName').value.trim();
  const role = document.getElementById('jobRole').value;

  if (!name || !role) {
    addChatBubble('Please complete all fields to activate the Job Scout.', true);
    return;
  }

  addChatBubble(`Job Scout requested for ${role} candidate ${name}.`, true);
  addChatBubble('Scanning premium stucco and painting talent for luxury projects...', false);

  setTimeout(() => {
    const job = {
      name,
      role,
      experience: 'High-end residential & commercial finish work',
      receivedAt: new Date().toISOString(),
    };
    addJobResult(job);
    addChatBubble(`Done. This worker candidate has been added to the Talent Roster.`, false);
    jobForm.reset();
  }, 1400);
});

projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('projectTitle').value.trim();
  const description = document.getElementById('projectDesc').value.trim();
  const imageInput = document.getElementById('projectImage');

  if (!title || !description || !imageInput.files.length) {
    showMessage(projectMessage, 'Please complete all fields and choose an image to add a new project.');
    return;
  }

  const file = imageInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    addProject(title, description, reader.result);
    showMessage(projectMessage, `Project "${title}" added to your luxury portfolio.`);
    projectForm.reset();
  };
  reader.onerror = () => {
    showMessage(projectMessage, 'There was an error reading the image. Please try a different file.');
  };
  reader.readAsDataURL(file);
});

renderGallery();
updateResults();
switchTab('lead');
