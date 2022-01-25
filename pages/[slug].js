import ErrorPage from 'next/error';
import {useRouter} from "next/router";
import PageBody from "../components/helpful-links/page-body";
import { getPostBySlug, getAllPosts } from '../lib/link-slug-scripts'
import markdownToHtml from "../lib/markdownToHtml";
import BlossmHead from "../components/blossm-head";


export default function LinkPage({page}) {
    const router = useRouter()
    if (!router.isFallback && !page?.slug) {
        console.log(`failed to get page ${page}`);
        return <ErrorPage statusCode={404}/>
    }
    return (
        <div>
            <BlossmHead
                pageTitle={page.title}
                pageDescription={page.desc}
            />
            <PageBody content={page.content} />
        </div>

    )
}

export async function getStaticProps({ params }) {
    const page = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'desc',
        'content',
    ])
    const content = await markdownToHtml(page.content || '')

    return {
        props: {
            page: {
                ...page,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}