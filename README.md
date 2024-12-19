# Orange 🍊

[![Twitter Follow](https://img.shields.io/twitter/follow/qdqd___?style=social)](https://twitter.com/qdqd___)

~~This is just a orange.~~

The orange is a lie. Orange is a browser extension that automatically open extension links from the VSCode marketplace in Cursor. It is ready to use without any required configuration. Install it and enjoy Parsec.

> For the moment, this extension only works on Chromium (Chrome/Microsoft Edge/Brave...). More compatibility would coming soon.

# How to install the extension

<details>
  <summary>For developers</summary>

`npm` is required for this repository. Once `npm` is installed, run this command to install the dependencies and build the extension

```bash
npm install && npm run build:zip
```

At the root of the repository, a new directory called `build` has been created. This directory should have a file called `chrome-mv3-prod.zip`. Uncompress it because you will need it for the last step.

</details>

<details>
  <summary>For non-developers</summary>

Go to the [release page](https://github.com/qd-qd/orange/releases) of this repository and download the extension from the last release. Once downloaded, uncompress the file.

</details>

Now open your browser, go to the `chrome://extensions` page, enable the developer mode, click on the "Load unpacked" button and select the directory that was originally compressed.

![screenshot chrome](./public/screenshot-chrome-extension.png)

That's it, the extension is installed and it will automatically do what it has to do without any intervention from you.

---

Orange icon created by [Freepik - Flaticon](https://www.flaticon.com/free-icon/orange_6866499)
