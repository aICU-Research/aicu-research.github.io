# aICU website

A Jekyll site for GitHub Pages. The activity collection powers both the homepage and the full archive at `/activity/`.

## Updating the website

Most content can be updated without editing HTML, CSS or JavaScript. Changes are automatically published through GitHub Pages after committing and pushing to the main branch.

### Team

Edit `_data/team.yaml`.

Each member has the following properties:

```yaml
- name: Full Name
  role: Researcher
  image: images/people/name.jpg
  url: https://example.com/profile
  order: 2
```

- Upload photographs to `images/people/`.
- Use square photographs, ideally around 400-500 pixels.
- Use `images/people/person.png` if no photograph is available.
- Lower `order` values appear first. Members with the same value are randomly ordered on each page load.

### Supporters

Edit `_data/supporters.yaml`.

```yaml
- name: Organisation Name
  image: images/supporters/organisation.png
  url: https://example.com
  order: 1
```

Upload organisation logos to `images/supporters/`. Transparent PNG or SVG files are preferable.

Supporters follow the same ordering and randomisation logic as team members.

### Activities

News, workshops, presentations, milestones, publications, awards and blogposts are stored as individual Markdown files in `_activity/`.

To add an activity, copy `_templates/activity.md` and rename it using the following convention:

`YYYY-MM-DD-short-title.md`

For example:

```yaml
---
title: Workshop in Cambridge
date: 2026-11-25
end_date: 2026-11-27
type: event
image: /images/activity/cambridge-workshop-2026.jpg
summary: Short description of the workshop.
---

Optional longer description of the workshop.
```

Optional properties:

- `image`: Path to the activity photograph.
- `image_alt`: Alternative text describing the photograph.
- `source`: Name of the original source or organisation.
- `link_to`: External source link displayed at the end of the activity page.
- `summary`: Short description displayed on the card.
- `end_date`: End date for multi-day activities.
- `date_label`: Custom displayed date, e.g. "Early 2025 (TBD)".
- `date_precision`: Set to `month` or `year` for approximate dates.

Activities are automatically sorted by date, newest first. Every card opens its local activity page. The optional `link_to` provides a link to the original source there.

### Writing activity content and adding photographs

Edit the Markdown text below the closing `---` in the activity file. Use normal Markdown for paragraphs, headings, links and lists. The `image` field automatically displays the cover photograph on both the card and the article, so do not repeat it in the body.

To add a second or third photograph, upload it to `images/activity/` and insert a Markdown image wherever it should appear in the article:

```markdown
![Workshop photograph]({{ "/images/activity/cambridge-workshop-2026-2.jpg" | relative_url }})
```

You can also use a plain root-relative path, e.g. `![Workshop photograph](/images/activity/example.jpg)`. No layout changes are needed.

### Activity categories

Edit `_data/activity_types.yml` to add or modify categories.

```yaml
workshop:
  label: Workshop
  color: "#4F0433"
```

New categories automatically appear in the activity archive filter.

### Images

| Directory | Purpose |
|---|---|
| `images/people/` | Team photographs |
| `images/supporters/` | Supporter logos |
| `images/activity/` | Activity photographs |
| `images/branding/` | aICU logos |
| `images/banner/` | Institutional logos |

Activity photographs should ideally have a 16:9 aspect ratio. Compress large photographs before uploading.

Uploading an image alone is not sufficient. Its path must also be referenced in the corresponding YAML or Markdown file.

### Other settings

| File | Purpose |
|---|---|
| `_data/about.yaml` | Project description |
| `_data/navigation.yml` | Navigation menu |
| `_config.yml` | Global settings and homepage activity count |
| `assets/css/style.css` | Colours, typography and styling |
| `favicon.ico` / `favicon.png` | Browser favicon |

### Branding

- Project name: aICU
- Font: DM Sans
- Primary colour: `#4F0433` (Karolinska burgundy)
- Secondary colour: `#8EE8D8` (Cambridge turquoise)

Logo variants are available in `images/branding/`.
Credit to Akshaya for the original design

## TODO

- Add a Contact Us / Get in Touch section.
- Remove year filtering

### University-grouped team page

Edit `_data/team.yaml` to add or update a person. Each person's `institution` must match an `id` in `_data/universities.yml`. Their `order` controls their position within that institution on the Team page. Update university names, subtitles and logo paths in `_data/universities.yml`. Logos are stored in `images/universities/`; portraits in `images/people/`. The country count is set in `_includes/team-institutions.html`.

### Homepage team order

The homepage uses a single grid and displays each member's university from `institution` in `_data/team.yaml`. The optional `homepage_order` field controls homepage priority (default 2); equal values are randomised. The separate Team page uses `order` within each university.
