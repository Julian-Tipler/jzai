import fs from "fs";

const jsonData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
console.log(jsonData[0]);

const transformData = (data) => {
  return data.map((item) => ({
    title: item.Actual_Title,
    url: item.Page_URL,
    content: item.Text,
  }));
};

const transformedData = transformData(jsonData);

const exportTransformedDataToFile = (data, filePath) => {
  const dataString = JSON.stringify(data, null, 2); // Beautify the JSON output
  fs.writeFile(filePath, dataString, "utf-8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log(`Transformed data has been written to ${filePath}`);
    }
  });
};

// Usage
exportTransformedDataToFile(transformedData, "./parsedData.json");
