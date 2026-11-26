# aICU website

A Jekyll site for GitHub Pages. The activity collection powers both the homepage and the full archive at `/activity/`.

## Add an activity

1. Copy `_templates/activity.md` to `_activity/YYYY-MM-DD-short-title.md`.
2. Set title, date and type. Add an optional summary, source and image (put images in `images/activity/`).
3. Set `link_to` to send card visitors to an external page, or omit it to show the local Markdown article. Every activity has a local URL regardless.
4. Commit and push. Activities are sorted by date, newest first. Future events are allowed.

For month-only dates, use the first of the month as a sorting key and set `date_precision: month`. For year-only dates use January 1 and `date_precision: year`. The display hides the placeholder day/month. The three migrated news entries retain their original month-level display; the Cambridge entry uses the date embedded in its original URL.

Activity types (labels and colours): `_data/activity_types.yml`. New types appear automatically in the archive filter. Navigation: `_data/navigation.yml`. Homepage activity count: `_config.yml`. Team, supporters and intro remain in `_data/`.

Existing image folders `images/people`, `images/supporters` and `images/banner` are retained. Former `images/news` images moved to `images/activity`.

## Preview locally

With Ruby and Bundler installed, run `bundle install`, then `bundle exec jekyll serve` and open http://localhost:4000. No custom Jekyll plugins are needed. GitHub Pages can continue to build from the repository root.

## Branding and team

Logo variants are in `images/branding/`. The header uses the transparent rectangular SVG; the favicon uses the white circular version. The team roster and roles were synced from the [KI project page](https://ki.se/en/research/research-areas-centres-and-networks/research-groups/perioperative-care-and-intensive-care/the-aicu-project-developing-next-generation-decision-support-tools-for-intensive-care) on 26 November 2026. New members use the existing placeholder portrait until photographs are supplied. The award entry uses a category placeholder until a local photo is available.

For uncertain dates or multi-day events, set `date_label` to the displayed date text and use `date` as the chronological sorting key (start date for ranges). Optional `end_date` records the end of a multi-day event. The early 2025 Cambridge workshop uses January 1 solely for sorting. The Summit year is provisionally 2025, pending confirmation.
