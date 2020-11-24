const url = 'http://localhost:5000/api/music/';

class DataService {
    //get posts
    static async getMusic() {

            try {
                const response = await fetch(url);
                const data = await response.json();
                //alert(data);
                return data.map(music => ({
                    ...music
                }));
                
            } catch (err) {
                alert(err);
            }
    }
    
}

export default DataService;