# Adding yourself to the webring

(Please only follow this if you're an Epesooj insider. Random PRs will be closed for now.)

Add your information to `webring_data.json`.
The schema is as follows:

- **`id`**: a unique id for your entry.
  You will use this id when adding webring links on your own blog/page.
- **`title`**: the title you want to use on the webring directory.
- **`author`**: the name you want to use on the webring directory.
- **`url`**: the URL to redirect to whenever the webring needs to point a visitor to your entry.

Create a PR with your changes.

# Using the webring on your blog/page

Somewhere in your blog/page (footer recommended), add the following links.
Remember to replace `<YOUR_ID_HERE>` with the unique id for your entry on the webring.

Note: it's ok for you to add these links to your page before your PR gets approved and merged.
The webring will redirect to random pages when given an unknown id.
Whenever your PR gets approved and merged, your id will be recognised and you'll officially be part of the webring.

- Previous entry: `https://epesooj-webring.pages.dev/previous?id=<YOUR_ID_HERE>`
- Next entry: `https://epesooj-webring.pages.dev/previous?id=<YOUR_ID_HERE>`
- A link to the webring directory: `https://epesooj-webring.pages.dev`
