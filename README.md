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
