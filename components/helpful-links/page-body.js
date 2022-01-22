import markdownStyles from './page-body.module.css';


export default function PostBody({ content }) {
    return (
        <div className="max-w-2xl mx-5 pb-2">
            <div
                className={markdownStyles['markdown-body']}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    )
}