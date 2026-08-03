// Edit this file to add/update projects. Each entry drives one "commit" card.
// hash: any short 7-char string, just for the log aesthetic — doesn't need to be a real git hash.

export const projects = [
 
  
  {
    hash: '9c1d5a0',
    title: 'Multi-Document AI Research Assistant',
    message: 'Implement RAG pipeline over multiple documents with citation support',
    description:
      'A retrieval-augmented generation assistant that answers questions across multiple uploaded documents, using vector search for grounded, citation-backed responses.',
    stack: ['FastAPI', 'LangChain', 'Cohere', 'Pinecone', 'React', 'Vite', 'Tailwind'],
    diff: { added: 960, removed: 90 },
    links: {
      repo: 'https://github.com/syedmustafa03/Multi-Document-Research-Assistant-RAG-',
      demo: '',
    },
  },
]

export const skills = {
  Languages: ['Python', 'JavaScript', 'HTML/CSS' , 'C++'],
  'Backend': ['Flask', 'FastAPI'],
  'AI / RAG': ['LangChain', 'Cohere', 'Pinecone', 'Vector DBs'],
  'Frontend': ['React', 'Vite', 'Tailwind CSS'],
  'Tools': ['Git', 'GitHub', 'MongoDB'],
}
