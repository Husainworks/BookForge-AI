import React from "react";
import { ArrowRight, Sparkles, BookOpen, Zap } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { HeroBG } from "../../const/imageConst";

export const Hero = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <div className="relative bg-linear-to-br from-violet-50 via-white to-purple-50 overflow-hidden min-h-[calc(100svh-var(--header-height))]">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-violet-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-xl space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-violet-100 shadow-sm">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-medium text-violet-900">
                  AI-Powered Publishing
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Create Stunning
                <span className="block mt-2 bg-linear-to-r from-violet-600 via-purple-600 bg-clip-text text-transparent">
                  EBooks in Minutes
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                From idea to published ebook, our AI-powered platform helps you
                write, design, and export professional-quality books
                effortlessly.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to={isAuthenticated ? "/dashboard" : "/login"}
                  className="group inline-flex items-center space-x-2 bg-linear-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-200"
                >
                  <span>Start creating for free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#demo"
                  className="inline-flex items-center space-x-2 text-gray-700 font-medium hover:text-violet-600 transition-colors duration-200"
                >
                  <span>Watch Demo</span>
                  <ArrowRight className="w5 h-5 text-violet-600" />
                </a>
              </div>

              <div className="flex items-center flex-col sm:flex-row gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Books created</div>
                </div>

                <div className="w-px h-12 bg-gray-200 sm:block hidden"></div>

                <div>
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600">User Rating</div>
                </div>

                <div className="w-px h-12 bg-gray-200 sm:block hidden"></div>

                <div>
                  <div className="text-2xl font-bold text-gray-900">10min</div>
                  <div className="text-sm text-gray-600">Avg. Creation</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative lg:pl-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-violet-600 to-purple-600 rounded-3xl opacity-20 blur-2xl"></div>

                <div className="relative py-2 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                  <img
                    src={HeroBG}
                    alt="AI Book Creator Dashboard"
                    className="w-full h-auto"
                  />

                  <div className="absolute top-6 right-6 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm border border-gray-100 animate-in fade-in slide-in-from-right duration-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-linear-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 -h5 text-white" />
                      </div>

                      <div>
                        <div className="text-xs text-gray-500">Processing</div>
                        <div className="text-sm font-semibold text-gray-900">
                          AI Generation
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm border border-gray-100 animate-in fade-in slide-in-from-left duration-700 delay-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-linear-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>

                      <div>
                        <div className="text-xs text-gray-500">Completed</div>
                        <div className="text-sm text-gray-900 font-semibold">
                          247 Pages
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -left-8 w-20 h-20 bg-violet-400/20 rounded-2xl rotate-12"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-400/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
