export const getMenuStructure = () => {
  return fetch("/md/toc.md")
    .then(res => res.text())
    .then(content => {
      const lines = content.match(/[^\r\n]+/g);
      let menu = [];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // eslint-disable-next-line
        let text = line.match(/\[([^\[\]]+)\]/)[0];
        text = text.replace("[", "").replace("]", "");
        // eslint-disable-next-line
        let link = line.match(/\([^)]+\)/)[0];
        link = link.replace("(", "").replace(")", "");
        let item = { link, text, children: [] };
        if (line.startsWith(" ")) {
          let lastRootItem = menu[menu.length - 1];
          if (lastRootItem && lastRootItem.children) {
            lastRootItem.children.push(item);
          } else {
            lastRootItem.children = [item];
          }
        } else {
          menu.push(item);
        }
      }
      return menu;
    });
};
