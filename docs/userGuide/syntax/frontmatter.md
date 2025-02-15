## Front Matter

**You can use a _Front Matter_ section to specify page properties such as the title and keywords of the page.** To specify front matter for a page, insert a `<frontmatter>` tag in the following format at the beginning of the page.

```html
<frontmatter>
  property1: value1
  property2: value2
</frontmatter>
```
<div class="indented">

{{ icon_example }} Here, we set the page `title` attribute as `Binary Search Tree`.
```html
<frontmatter>
  title: Binary Search Tree
</frontmatter>
```
</div>

<box type="warning" seamless>

Should you need more expressive formatting, or encounter any issues when formatting the frontmatter, note that the frontmatter follows the [YAML](https://yaml.org/refcard.html) spec.
</box>

<box type="warning" seamless>

If a page has multiple front matters, it will take the last front matter by default. You may make use of [omitFrontmatter]({{ base_url }}/userGuide/reusingContents.html#includes) , which is an attribute of Markbind's \<include> feature to omit the front matters that are not needed.
</box>

**Page properties:**

* **`title`**: The title of the page. Will be used as the `<title>` attribute of the HTML page generated.
* Other properties such as `keywords`, `layout`, etc. will be explained in other places of this user guide.

<include src="../siteJsonFile.md#page-property-overriding" />

<div id="short" class="d-none">

```html
<frontmatter>
  title: Binary Search Tree
  pageNav: 2
</frontmatter>
```
</div>
