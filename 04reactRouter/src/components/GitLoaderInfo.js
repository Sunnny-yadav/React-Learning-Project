
    async function GitLoaderInfo(){
        let data =await fetch("https://api.github.com/users/Sunnny-yadav");
        if (!(data.ok)) {
          throw new Error('Failed to fetch GitHub data');
        }
        return data.json();
        
      }

    

export default GitLoaderInfo