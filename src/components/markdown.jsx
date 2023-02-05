import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const Markdown = ({ className, content }) => {
    return (
        <ReactMarkdown
            className={className}
            children={content}
            skipHtml={false}
            remarkPlugins={[
                remarkGfm,
                remarkHtml
            ]}
        />
    );
}

export default Markdown;
