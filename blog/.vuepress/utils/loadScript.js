const RESOURCE_LIST = [
  "https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js",
  "https://cdn.staticfile.org/marked/2.0.0/marked.min.js",
  "https://cdn.jsdelivr.net/npm/ispeak@4.4.0/ispeak.umd.js",
];

export function loadScript(url) {
  return new Promise((resolve, reject) => {
    const newScript = document.createElement("script");

    // newScript.setAttribute("src", url);
    // document.head.appendChild(newScript);

    newScript.onload = () => resolve();

    newScript.onerror = () => reject(new Error(`Load script from ${url} failed`));

    newScript.src = url;
    const head = document.head || document.getElementsByTagName("head")[0];
    (document.body || head).appendChild(newScript);
  });
}

export function loadVoLteResourceList() {
  return RESOURCE_LIST.reduce(
    (res, el) => res.then(() => loadScript(el)),
    Promise.resolve()
  )
    .then(() => {
      console.log("success");
    })
    .catch((error) => {
      console.error(
        "外呼VoLTE sdk 前置 js 资源加载失败:",
        error.name,
        error.message
      );
      return Promise.reject(error);
    });
}
