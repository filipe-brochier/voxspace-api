export class Slug {
  public value: string;

  constructor(value: string) {
    this.value = value;
  }

  /**
   * Creates a slug from a string.
   *
   * Example: "Example Title" => "example-title"
   *
   * @param text{string} - The string to be converted to a slug.
   */
  static createFromString(text: string): Slug {
    const slugText = text
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/_/g, "-")
      .replace(/--+/g, "-")
      .replace(/-$/g, "")

    return new Slug(slugText);
  }
}
