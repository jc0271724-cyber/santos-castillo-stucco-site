# S. Castillo Construction — Website

Business website for S. Castillo Construction (stucco, stone, and remodeling in Houston, TX).

## Free Hosting with GitHub Pages

This site is deployed for free using GitHub Pages.

### How to enable (one-time setup):
1. Go to your repo on GitHub: `Settings` > `Pages`
2. Under **Source**, select **GitHub Actions**
3. The site will auto-deploy on every push to `main`
4. Your site URL: `https://jc0271724-cyber.github.io/santos-castillo-stucco-site/`

### Adding your project photos (recommended: the admin Gallery Manager)

The whole gallery lives in one file, **`gallery-data.js`**. You don't add
individual image files anymore — photos you upload get embedded into that one
file.

1. Open **`admin.html`** and sign in, then go to **Gallery**.
2. Click **+ Add Photos** (or drag photos onto the drop zone). Each photo is
   automatically resized and compressed so the file stays a reasonable size.
3. Set a caption and category, reorder with ↑/↓, and use **Visible/Hidden** to
   control what shows on the site.
4. Click **Export gallery-data.js** — your browser downloads the updated file.
5. Replace `gallery-data.js` in the repo with that download, then commit and
   push. The live gallery updates automatically.

Notes:
- Photos added this way are embedded as data inside `gallery-data.js` (the card
  shows an `embedded` tag); the original starter photos still point at the
  `.jpg` files in the repo (`file` tag). Both work.
- Edits are kept in your browser as a draft until you export, so you won't lose
  work between sessions on the same computer.
- Because the site is static (no server), publishing always requires committing
  the exported `gallery-data.js` — that's the one file to commit instead of many
  individual images.
