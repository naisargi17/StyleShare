export interface IPost {
    id: string;
    title: string;
    description: string;
    codeSnippet: string;
    jsCodeSnippet: string;
    tags: string[];
    createdAt:number;
    author: {
      id: string;
      username: string;
      email: string;
      totalFollowers:number
    },
    comments:[]
    reactions:[];
    favoritePosts: [];
    userReaction: 'Like' | 'Celebrate' | 'Support' | 'Love' | 'Insightful' | 'Funny' | null; 
  }
  
  export interface IUser {
    id: string;
    username: string;
    email: string;
    verified: boolean;
    createdAt:string;
    blocked: boolean;
    posts: IPost[];
    favoritePosts?: IPost[]; 
    comments:[];
    following: [];
    isFollowing: boolean;
  }

  export interface IStats {
    totalUsers: number;
    totalPosts: number;
    totalComments: number;
    totalReactions: number;
    contactMessages: number;
    favoritesPosts: number;
  }