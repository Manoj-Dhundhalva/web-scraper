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
    specification: {
      input: $(".problem-statement .input-specification p")
        .map((_, el) => $(el).text().trim())
        .get()
        .join(" "),
      output: $(".problem-statement .output-specification p")
        .map((_, el) => $(el).text().trim())
        .get()
        .join(" "),
    },
    testCase: {
      input: $(".problem-statement .sample-test .input pre")
        .map((_, el) =>
          $(el)
            .contents()
            .map((_, node) => $(node).text().trim())
            .get()
            .filter(Boolean)
            .join("\n"),
        )
        .get()
        .join("\n"),
      output: $(".problem-statement .sample-test .output pre")
        .map((_, el) =>
          $(el)
            .contents()
            .map((_, node) => $(node).text().trim())
            .get()
            .filter(Boolean)
            .join("\n"),
        )
        .get()
        .join("\n"),
    },
    note: $(".problem-statement .note")
      .map((_, el) => $(el).text().trim())
      .get()
      .join(" "),
  };
}
