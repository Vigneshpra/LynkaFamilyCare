import React from 'react';
import { Link } from './Link';
import { Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  imageCredit: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogPreview: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Tips for Preventing Falls in the Elderly",
      excerpt: "Learn about practical strategies to create a safer home environment and reduce the risk of falls for seniors. Our comprehensive guide covers home modifications, exercise recommendations, and daily habits that can help prevent falls.",
      image: "https://images.pexels.com/photos/7551838/pexels-photo-7551838.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageCredit: "Photo by RDNE Stock project from Pexels",
      date: "April 15, 2025",
      readTime: "5 min read",
      category: "Safety"
    },
    {
      id: "2",
      title: "Understanding Dementia: A Guide for Caregivers",
      excerpt: "This comprehensive guide helps family caregivers understand dementia, its various types, stages, and provides effective communication strategies for better care and support.",
      image: "https://images.pexels.com/photos/7551621/pexels-photo-7551621.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageCredit: "Photo by RDNE Stock project from Pexels",
      date: "April 8, 2025",
      readTime: "7 min read",
      category: "Caregiving"
    },
    {
      id: "3",
      title: "Nutrition Tips for Seniors: Maintaining a Healthy Diet",
      excerpt: "Discover the important nutrients seniors need and simple ways to incorporate them into daily meals. Learn about age-specific dietary requirements and practical meal planning tips.",
      image: "https://images.pexels.com/photos/5906707/pexels-photo-5906707.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageCredit: "Photo by Karolina Grabowska from Pexels",
      date: "April 1, 2025",
      readTime: "6 min read",
      category: "Nutrition"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Latest Articles</h2>
            <p className="text-lg text-slate-600">
              Helpful resources, tips, and insights for caregivers and families.
            </p>
          </div>
          <Link to="/blog" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors mt-4 md:mt-0">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <span>{post.date}</span>
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
                <div className="flex flex-col space-y-2">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-xs text-slate-500 italic">{post.imageCredit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
