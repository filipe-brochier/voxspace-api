export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Creates a slug from a text.
   *
   * Example: "Example Title" => "example-title"
   *
   * @param text{string} - The text to be converted to a slug.
   */
  static createFromText(text: string): Slug {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return new Slug(slugText)
  }
}
