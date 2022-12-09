interface BlogCardProps {
  title: string;
  topic: string;
  imageUrl: string;
  contentUrl: string;
  author: string;
  authorUrl: string;
  date: string;
}

// Custom Card component for rendering blog posts
export default function BlogCard(props: BlogCardProps) {
  return (
    <div className="p-card--highlighted blog-card-highlight blog-card-shadow">
      <p className="blog-topic">{props.topic.toUpperCase()}</p>
      <hr className="blog-divider-top" />
      <a href={props.contentUrl}>
        <img className="p-card__image" src={props.imageUrl} alt="" />
      </a>

      <a href={props.contentUrl}>
        <h3 className="p-heading--4.5 blog-title" style={{ fontWeight: 300 }}>
          {props.title}{" "}
        </h3>
      </a>

      <p className="p-heading--6 blog-topic">
        <>
          By <a href={props.authorUrl}>{props.author}</a> on {props.date}
        </>
      </p>
      <div className="blog-card-article-spacing" />
      <hr className="blog-divider-bottom" />
      <p className="blog-article"> Article </p>
    </div>
  );
}
