import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from '../components/Link';
import { Clock, Calendar, Search, Filter } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Tips for Preventing Falls in the Elderly",
      excerpt: "Learn about practical strategies to create a safer home environment and reduce the risk of falls for seniors.",
      image: "https://images.pexels.com/photos/7551838/pexels-photo-7551838.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "April 15, 2025",
      readTime: "5 min read",
      category: "Safety"
    },
    {
      id: "2",
      title: "Understanding Dementia: A Guide for Caregivers",
      excerpt: "This comprehensive guide helps family caregivers understand dementia and provides effective communication strategies.",
      image: "https://images.pexels.com/photos/7551621/pexels-photo-7551621.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "April 8, 2025",
      readTime: "7 min read",
      category: "Caregiving"
    },
    {
      id: "3",
      title: "Nutrition Tips for Seniors: Maintaining a Healthy Diet",
      excerpt: "Discover the important nutrients seniors need and simple ways to incorporate them into daily meals.",
      image: "https://images.pexels.com/photos/5906707/pexels-photo-5906707.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "April 1, 2025",
      readTime: "6 min read",
      category: "Nutrition"
    },
    {
      id: "4",
      title: "Managing Medications: Tips for Family Caregivers",
      excerpt: "Learn effective strategies for organizing, tracking, and administering medications to avoid errors and complications.",
      image: "https://images.pexels.com/photos/5699501/pexels-photo-5699501.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 25, 2025",
      readTime: "8 min read",
      category: "Caregiving"
    },
    {
      id: "5",
      title: "How to Recognize the Signs of Caregiver Burnout",
      excerpt: "Identify the physical and emotional symptoms of caregiver burnout and learn self-care techniques to prevent it.",
      image: "https://images.pexels.com/photos/7580386/pexels-photo-7580386.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 18, 2025",
      readTime: "6 min read",
      category: "Wellness"
    },
    {
      id: "6",
      title: "Improving Sleep Quality for Seniors",
      excerpt: "Explore common sleep issues affecting older adults and practical solutions for better sleep hygiene and quality.",
      image: "https://images.pexels.com/photos/7580390/pexels-photo-7580390.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 11, 2025",
      readTime: "5 min read",
      category: "Health"
    },
    {
      id: "7",
      title: "Benefits of Art Therapy for Seniors with Dementia",
      excerpt: "Discover how creative expression through art can improve cognition, mood, and quality of life for those with dementia.",
      image: "https://images.pexels.com/photos/7551642/pexels-photo-7551642.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "March 4, 2025",
      readTime: "7 min read",
      category: "Therapy"
    },
    {
      id: "8",
      title: "Navigating Medicare and Insurance for Home Care",
      excerpt: "A straightforward guide to understanding coverage options, eligibility requirements, and how to maximize benefits.",
      image: "https://images.pexels.com/photos/7579381/pexels-photo-7579381.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 25, 2025",
      readTime: "9 min read",
      category: "Resources"
    },
    {
      id: "9",
      title: "Creating a Dementia-Friendly Home Environment",
      excerpt: "Practical modifications and design tips to create a safe, supportive, and navigable home for those with dementia.",
      image: "https://images.pexels.com/photos/7551640/pexels-photo-7551640.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "February 18, 2025",
      readTime: "6 min read",
      category: "Safety"
    }
  ];

  const categories = ["All", "Caregiving", "Health", "Nutrition", "Safety", "Wellness", "Therapy", "Resources"];

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Healthcare Resources & Blog</h1>
              <p className="text-xl text-slate-600">
                Helpful information, tips, and insights for caregivers and families.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <Link to={`/blog/${post.id}`}>
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold py-1 px-2 rounded">
                            {post.category}
                          </div>
                        </div>
                      </Link>
                      <div className="p-6">
                        <div className="flex items-center text-slate-500 text-sm mb-2">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.date}
                          </span>
                          <span className="mx-2">•</span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <Link to={`/blog/${post.id}`}>
                          <h3 className="text-xl font-semibold text-slate-800 mb-2 hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-slate-600 mb-4">{post.excerpt}</p>
                        <Link 
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex justify-center">
                  <nav className="inline-flex rounded-md shadow">
                    <a href="#" className="px-4 py-2 border border-slate-300 bg-white text-sm font-medium rounded-l-md text-slate-700 hover:bg-slate-50">
                      Previous
                    </a>
                    <a href="#" className="px-4 py-2 border-t border-b border-slate-300 bg-white text-sm font-medium text-primary">
                      1
                    </a>
                    <a href="#" className="px-4 py-2 border-t border-b border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
                      2
                    </a>
                    <a href="#" className="px-4 py-2 border-t border-b border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50">
                      3
                    </a>
                    <a href="#" className="px-4 py-2 border border-slate-300 bg-white text-sm font-medium rounded-r-md text-slate-700 hover:bg-slate-50">
                      Next
                    </a>
                  </nav>
                </div>
              </div>

              <div className="lg:w-1/4">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <div className="relative mb-6">
                    <input 
                      type="text" 
                      placeholder="Search articles..." 
                      className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                      <Filter className="h-5 w-5 mr-2" />
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <div key={index} className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={`category-${index}`} 
                            className="mr-2 h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded"
                            defaultChecked={category === "All"}
                          />
                          <label htmlFor={`category-${index}`} className="text-slate-700">{category}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Popular Articles</h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.id} className="flex items-start">
                          <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0 mr-3">
                            <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Link 
                              to={`/blog/${post.id}`} 
                              className="font-medium text-slate-800 hover:text-primary transition-colors line-clamp-2"
                            >
                              {post.title}
                            </Link>
                            <p className="text-xs text-slate-500 mt-1">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-slate-600 mb-4">
                    Stay updated with the latest healthcare tips, resources, and news.
                  </p>
                  <form>
                    <div className="mb-4">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
                        required
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="btn-primary w-full"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;