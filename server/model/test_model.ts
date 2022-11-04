import fs from 'fs'
import path from 'path'
export const getWords = () => {
    const direc = path.join(process.cwd(), 'resources', 'TestData.json')
    const fileData = fs.readFileSync(direc);
    const data = JSON.parse(fileData.toString())


    var randomeData = data.wordList[Math.floor(Math.random() * data.wordList.length)];
    let arr = [];
    let obj: any = {}
    for (let i = 0; i < data.wordList.length; i++) {
        if (obj.data.wordList[0].pos) {
            obj.data.wordList[0].pos += 1
        } else {
            obj.data.wordList[0].pos = 1
        }
    }
    return randomeData;
}