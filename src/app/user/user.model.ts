export interface User {
  name: {
    title: string; 
    first: string; 
    last: string
    };
  location: { 
    country: string 
    };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string; 
    };
}
