const File = require("../models/File");
const Box  = require("../models/Box")

class FileController {

    async Store(req, res){
        //Criar um arquivo
        const box = await Box.findById(req.params.id);
        const file = await File.create({
            title: req.file.originalname,
            path: req.file.key,
        })
        
        box.files.push(file);
        
        await box.save();

        req.io.sockets.in(box._id).emit("file", file);

        return res.send(file)

    }
}

module.exports = new FileController();