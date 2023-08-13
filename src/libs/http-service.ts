import * as https from 'https';
export const fetchData = (url: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const req = https.get(url, res => {
            let data = '';
    
            res.on('data', chunk => {
            data += chunk;
            });
    
            res.on('end', () => {
            try {
                resolve(JSON.parse(data));
            } catch (err) {
                reject(new Error(err));
            }
            });
        });
  
        req.on('error', err => {
            reject(new Error(err.message));
        });
    });
};