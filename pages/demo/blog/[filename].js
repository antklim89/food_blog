// THIS FILE HAS BEEN GENERATED WITH THE TINA CLI.
// This is a demo file once you have tina setup feel free to delete this file

import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { staticRequest, gql } from 'tinacms';
import { useTina } from 'tinacms/dist/edit-state';
import { TinaMarkdown } from 'tinacms/dist/rich-text';


const query = gql`
    query BlogPostQuery($relativePath: String!) {
      posts(relativePath: $relativePath) {
        title
        body
      }
    }
  `;

// Styles for markdown
const GlobalStyle = createGlobalStyle`
  h1,h2,h3,h4,h5 {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }
  blockquote {
    background-color: rgb(209,250,229);
  }
  h1 {
    font-size: 45px;
  }
  h2 {
    font-size: 35px;
  }
  h3 {
    font-size: 25px;
  }
  h4 {
    font-size: 22px;
  }
  ul {
    padding-left: 0;
  }
  li {
    list-style-type: none;
  }
  a {
    font-weight: bold;
    color: rgb(59,130,246);
    text-decoration: underline;
  }
  `;

const BlogPage = (props) => {
    const { data } = useTina({
        query,
        variables: props.variables,
        data: props.data,
    });

    return (
        <>
            <Head>
                {/* Tailwind CDN */}
                <link
                    crossOrigin="anonymous"
                    href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css"
                    integrity="sha512-y6ZMKFUQrn+UUEVoqYe8ApScqbjuhjqzTuwUMEGMDuhS2niI8KA3vhH2LenreqJXQS+iIXVTRL2iaNfJbDNA1Q=="
                    referrerPolicy="no-referrer"
                    rel="stylesheet"
                />
            </Head>
            <div>
                <div
                    style={{ textAlign: 'center' }}
                >
                    <h1 className="text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {data.posts.title}
                    </h1>
                    <ContentSection
                        content={data.posts.body}
                    />
                </div>
                <div className="bg-green-100 text-center">
                    Lost and looking for a place to start?
                    <a
                        className="text-blue-500 underline"
                        href="https://tina.io/guides/tina-cloud/getting-started/overview/"
                    >
                        {' '}
                        Check out this guide
                    </a>{' '}
                    to see how add TinaCMS to an existing Next.js site.
                </div>
            </div>
        </>
    );
};

export const getStaticProps = async ({ params }) => {
    const variables = { relativePath: `${params.filename}.md` };
    let data = {};
    try {
        data = await staticRequest({
            query,
            variables,
        });
    } catch {
        // swallow errors related to document creation
    }

    return {
        props: {
            variables,
            data,
        // myOtherProp: 'some-other-data',
        },
    };
};

export const getStaticPaths = async () => {
    const postsListData = (await staticRequest({
        query: gql`
        query GetPostsList {
          postsConnection {
            edges {
              node {
                ...on Document {
                  _sys {
                    filename
                  }
                }
              }
            }
          }
        }
      `,
    }));

    const paths = postsListData.postsConnection.edges.map((post) => ({ params: { filename: post.node._sys.filename } }));
    console.debug(': \n', paths);
    return {
        paths,
        fallback: false,
    };
};

export default BlogPage;

const PageSection = (props) => {
    return (
        <>
            <h2>{ props.heading }</h2>
            <p>{ props.content }</p>
        </>
    );
};

const components = { PageSection };

const ContentSection = ({ content }) => {
    return (
        <div className="relative py-16 bg-white overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div
                    aria-hidden="true"
                    className="relative h-full text-lg max-w-prose mx-auto"
                >
                    <svg
                        className="absolute top-12 left-full transform translate-x-32"
                        fill="none"
                        height={384}
                        viewBox="0 0 404 384"
                        width={404}
                    >
                        <defs>
                            <pattern
                                height={20}
                                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                patternUnits="userSpaceOnUse"
                                width={20}
                                x={0}
                                y={0}
                            >
                                <rect
                                    className="text-gray-200"
                                    fill="currentColor"
                                    height={4}
                                    width={4}
                                    x={0}
                                    y={0}
                                />
                            </pattern>
                        </defs>
                        <rect
                            fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                            height={384}
                            width={404}
                        />
                    </svg>
                    <svg
                        className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                        fill="none"
                        height={384}
                        viewBox="0 0 404 384"
                        width={404}
                    >
                        <defs>
                            <pattern
                                height={20}
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                patternUnits="userSpaceOnUse"
                                width={20}
                                x={0}
                                y={0}
                            >
                                <rect
                                    className="text-gray-200"
                                    fill="currentColor"
                                    height={4}
                                    width={4}
                                    x={0}
                                    y={0}
                                />
                            </pattern>
                        </defs>
                        <rect
                            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                            height={384}
                            width={404}
                        />
                    </svg>
                    <svg
                        className="absolute bottom-12 left-full transform translate-x-32"
                        fill="none"
                        height={384}
                        viewBox="0 0 404 384"
                        width={404}
                    >
                        <defs>
                            <pattern
                                height={20}
                                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                patternUnits="userSpaceOnUse"
                                width={20}
                                x={0}
                                y={0}
                            >
                                <rect
                                    className="text-gray-200"
                                    fill="currentColor"
                                    height={4}
                                    width={4}
                                    x={0}
                                    y={0}
                                />
                            </pattern>
                        </defs>
                        <rect
                            fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                            height={384}
                            width={404}
                        />
                    </svg>
                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                    <TinaMarkdown components={components} content={content} />
                    <GlobalStyle />
                </div>
            </div>
        </div>
    );
};

