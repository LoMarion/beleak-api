export default class Book {
    constructor(
        title,
        author,
        picture,
        country,
        publicationDate,
        category,
        summary,
        annotation,
        rate
    ) {
        this.title = title;
        this.author = author;
        this.picture = picture;
        this.country = country;
        this.publicationDate = publicationDate;
        this.category = category;
        this.summary = summary;
        this.annotation = annotation;
        this.rate = rate;
    }
}