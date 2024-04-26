export interface BlogSection {
    /** The header of the section */
    header: string
    /** An array of paragraphs that make up the section */
    paragraphs: string[]
}

/**
 * Content for blog type posts
 */
export interface BlogContent {
    /** The header of the blog post */
    title: string
    /** An array of sections (headers & paragraphs) that make up the blog post */
    sections: BlogSection[]
}
