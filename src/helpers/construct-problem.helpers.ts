import * as cheerio from "cheerio";

export function constructProblem(html: string) {
  const $ = cheerio.load(html);

  return {
    title: $(".problem-statement .header .title").text().trim(),
    timeLimit: $(".problem-statement .header .time-limit").contents().last().text().trim(),
    memoryLimit: $(".problem-statement .header .memory-limit").contents().last().text().trim(),
    problemStatement: $(".problem-statement")
      .children("div")
      .not(".header")
      .first()
      .map((_, el) => $(el).text().trim())
      .get()
      .join(" "),
    inputSpecification: $(".problem-statement .input-specification p")
      .map((_, el) => $(el).text().trim())
      .get()
      .join(" "),
    outputSpecification: $(".problem-statement .output-specification p")
      .map((_, el) => $(el).text().trim())
      .get()
      .join(" "),
    inputTestCase: $(".problem-statement .sample-test .input .test-example-line")
      .map((_, el) => $(el).text().trim())
      .get()
      .join("\n"),
    outputTestCase: $(".problem-statement .sample-test .input .test-example-line")
      .map((_, el) => $(el).text().trim())
      .get()
      .join("\n"),
    note: $(".problem-statement .note")
      .map((_, el) => $(el).text().trim())
      .get()
      .join(" "),
  };
}
