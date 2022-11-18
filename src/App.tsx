import { Header } from "./components/Header"
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Voraes.png',
      name: 'Victor Mendes',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },
      { type: 'paragraph', content: 'I just posted a new personal project. The name of the project is DogCare, take a look! 🚀' },
      { type: 'link', content: 'victor.design/dogcare' },
    ],
    publishedAt: new Date('2022-11-16 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1658932447775-dd78d1e7c369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      name: 'Susan Donirth',
      role: 'UI Designer'
    },
    content: [
      { type: 'paragraph', content: 'New design just arrived 🌟' },
      { type: 'paragraph', content: 'The new design of our project was posted. Go check out and maybe give some feedback!' },
      { type: 'link', content: 'susan.design/newdesign' },
    ],
    publishedAt: new Date('2022-11-17 15:30:00'),
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(posts => {
            return (
              <Post
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App

