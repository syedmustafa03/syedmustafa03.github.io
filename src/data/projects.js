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
  {
    hash: '3f2b1cf',
    title: "Agentic RAG System",
    message: 'Perform multi-step reasoning over documents with an agentic RAG system',
    description:
    'Agentic RAG system built with LangGraph, GPT-4o, FAISS, and Tavily, featuring dynamic routing, semantic document grading, and a React/Streamlit interface.',
    stack: ['Langgraph', 'GPT-4o', 'FAISS', 'Tavily', 'React', 'Streamlit',],
    diff: {added:141, removed: 22},
    links: {
      repo: 'https://github.com/syedmustafa03/Agentic-RAG-System',
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
