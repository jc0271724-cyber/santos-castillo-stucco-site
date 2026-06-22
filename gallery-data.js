/* gallery-data.js — single source of truth for the portfolio gallery.
 *
 * This ONE file holds every gallery photo. Existing photos point at committed
 * image files; photos you add in the admin page are embedded directly here as
 * base64 data (so they are NOT separate image files).
 *
 * To update: open admin.html → Gallery → add/edit photos → "Export gallery-data.js",
 * then replace this file with the download and commit it.
 *
 * Each item: { id, src, label, cat, visible }
 *   src     — a filename ("project-1.jpg") OR an embedded data URI ("data:image/jpeg;base64,...")
 *   cat     — space-separated tags used by the gallery filters
 *             (residential / commercial / stucco / stone)
 *   visible — false hides the photo from the public site without deleting it
 */
window.SC_GALLERY = [
  { id: "img8173",   src: "IMG_8173.jpg",  label: "Residential Estate · Stucco & Stone",        cat: "residential stucco stone", visible: true },
  { id: "img8176",   src: "IMG_8176.jpg",  label: "Custom Residence · Stucco Finish",           cat: "residential stucco",        visible: true },
  { id: "img8181",   src: "IMG_8181.jpg",  label: "Stone Facade · Detail Work",                 cat: "stone residential",         visible: true },
  { id: "img8175",   src: "IMG_8175.jpg",  label: "Commercial · Stone Base",                    cat: "commercial stone",          visible: true },
  { id: "img8177",   src: "IMG_8177.jpg",  label: "Estate · Stucco & Natural Stone",            cat: "residential stucco stone", visible: true },
  { id: "img8178",   src: "IMG_8178.jpg",  label: "Modern Residence · White Stucco",            cat: "residential stucco",        visible: true },
  { id: "img8179",   src: "IMG_8179.jpg",  label: "Completed Commercial Finish",                cat: "commercial stucco",         visible: true },
  { id: "img8180",   src: "IMG_8180.jpg",  label: "Hotel Stucco In Progress",                   cat: "commercial stucco",         visible: true },
  { id: "proj5",     src: "project-5.jpg", label: "Completed · Stucco & Stone Finish",          cat: "residential stucco stone", visible: true },
  { id: "proj1",     src: "project-1.jpg", label: "Mediterranean Estate · Stucco & Stone Base", cat: "residential stucco stone", visible: true },
  { id: "proj8",     src: "project-8.jpg", label: "Custom Home · Stucco & Columns",             cat: "residential stucco",        visible: true },
  { id: "proj6",     src: "project-6.jpg", label: "Modern Residence · Stucco In Progress",      cat: "residential stucco",        visible: true },
  { id: "proj2",     src: "project-2.jpg", label: "Estate · Stucco Restoration",                cat: "residential stucco",        visible: true },
  { id: "proj10",    src: "project-10.jpg",label: "Luxury Estate · Stucco & Tile Roof",         cat: "residential stucco",        visible: true },
  { id: "proj4",     src: "project-4.jpg", label: "Commercial · Stucco Application",            cat: "commercial stucco",         visible: true },
  { id: "proj7",     src: "project-7.jpg", label: "Commercial · Natural Stone Wall",            cat: "commercial stone",          visible: true },
  { id: "proj3",     src: "project-3.jpg", label: "Stucco · Scratch Coat Application",          cat: "stucco residential",        visible: true },
  { id: "proj9",     src: "project-9.jpg", label: "Stone & Stucco · Finished Home",             cat: "residential stucco stone", visible: true }
];
