console.debug("icons.js has started");

const fs = require("fs/promises");
const { exec } = require("child_process");
const { transform } = require("@svgr/core");

const inputIconsDir = "./src-assets/icons";
const outputIconsDir = "./src/atoms/icon/svg";
const iconRenderFile = "./src/atoms/icon/render.tsx";
const iconTypesFile = "./src/atoms/icon/types.ts";
const lintDir = "./src/atoms/icon";

const kebabCaseToPascalCase = (str) => {
  const words = str.split("-");
  const pascalCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return pascalCaseWords.join("");
};

const pascalCaseToKebabCase = (str) => {
  const words = str.split(/(?=[A-Z])/);
  const kebabCaseWords = words.map(word => word.toLowerCase());
  return kebabCaseWords.join("-");
}

const main = async () => {
  let iconNames = [];

  try {
    const files = await fs.readdir(inputIconsDir);

    const isDir = await fs.readdir(outputIconsDir);

    if (isDir) {
      await fs.rmdir(outputIconsDir, { recursive: true });
      console.debug(`📁 ${outputIconsDir}… deleted!`);
    }

    await fs.mkdir(outputIconsDir, { recursive: true });
    console.debug(`📁 ${outputIconsDir}… created!`);

    for (const file of files) {
      if (file.includes("-sharp")) {
        continue;
      }

      const iconName = kebabCaseToPascalCase(file.replace(".svg", ""));
      iconNames.push(iconName);
      const filePath = `${inputIconsDir}/${file}`;
      const outputFilePath = `${outputIconsDir}/${file.replace(".svg", ".tsx")}`;

      console.debug(`📁 ${filePath} -> ${outputFilePath}… copied!`);

      try {
        const data = await fs.readFile(filePath, "utf8");

        const outputData = await transform(
          data,
          {
            plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"],
            icon: true,
            exportType: "default",
            typescript: true,
            dimensions: false,
            jsxRuntime: "automatic",
            replaceAttrValues: {
              "#000": "currentColor",
              "rgb(0, 0, 0)": "currentColor",
            }
          },
          {
            componentName: iconName,
          },
        );

        await fs.writeFile(outputFilePath, outputData);
        console.debug(`📁 ${filePath} -> ${outputFilePath}… created!`);
      } catch (readError) {
        console.error(readError);
        console.error(`❗️ Error: ${readError.message}`);
      }
    }

    console.debug("✅ Icons have been generated!");

    const iconRenderFileContent = `import { IconName } from "./types";
${iconNames.map(iconName => `import ${iconName} from "./svg/${pascalCaseToKebabCase(iconName)}";`).join("\n")}

const IconRender = (name: IconName) => {
  switch (name) {
${iconNames.map(iconName => `    case "${iconName}":\n      return ${iconName};`).join("\n")}
    default:
      return <>⍰</>;
  }
};

export default IconRender;
`;

    await fs.writeFile(iconRenderFile, iconRenderFileContent);

    console.debug("✅ Icons render have been generated!");

    const iconTypesFileContent = `import { ThemeColours } from "../../settings/theme";

export const IconNames = ${JSON.stringify(iconNames)};

export type IconName = ${iconNames.map(iconName => `"${iconName}"`).join(" | ")};

export interface IconProps {
  name: IconName;
  color?: ThemeColours;
  size?: number;
}

export interface IconRenderProps {
  name: IconName;
}

export interface StyledIconProps {
  color?: ThemeColours;
  size: number;
}
`;

    await fs.writeFile(iconTypesFile, iconTypesFileContent);

    console.debug("✅ Icons types have been generated!");

    console.debug("🔍 Linting… This may take a while…");
    exec(`eslint --ext .js,.jsx,.ts,.tsx ${lintDir} --fix`, (error, stdout, stderr) => {
      if (error) {
        console.error(`❗️ Linting error: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`❗️ Linting stderr: ${stderr}`);
        return;
      }

      console.log(`✅ Linting has finished!`);
    });
  } catch (error) {
    console.error(error);
    console.error(`❗️ Error: ${error.message}`);
  }
};

main();
