const ProductModel = require('../models/ProductManagementModel');
const fs = require('fs');

const ProductData = async (req, res) => {
    try {
        const { productName, quantity, price, description, color, companyName, category, size, productMaterial } =req.body;
        let ImageDetaisl = [];
        let Size = size.split(',');
        req.files.forEach(arrayObject => {
            const { filename, originalname, mimetype } = arrayObject;
            ImageDetaisl.push({
                ImageUrl:`assets/Product/${productName}/${filename}`, 
                ImageName:originalname, 
                ImageMimeType:mimetype
            });
        })
        const docToCreate = new ProductModel({
            productName, quantity, price, description, color, companyName, category, size:Size, productMaterial , 
            imageDetaisl:ImageDetaisl
        })

        const docToSave = await docToCreate.save();
        res.json({
            Message:'Data Saved Successfuly',
            Body:docToSave,
            Data:true
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}

const GetProductData = async (req, res) => {
    try {
        // const DocToGet = await ProductModel.findOne(
        //     { Status: 0 }, //Condition
        //     { ProductPrice: 0 } //Projecttion
        //     //Options
        // );
        const docToGet = await ProductModel.find();
        res.json({
            Message: 'All Documents Found',
            Data: true,
            Result: docToGet
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}

const UpdateMyProductData = async (req, res) => {
    try {
        const DocToUpdate = await ProductModel.updateOne(
            { _id: '62d82a88c8127365f2143754' },//Kahan Kis ko
            { ProductPrice: 12099182 }//Kon c Vlaue
        )
        res.json({
            Message: 'Documents has benn Updated',
            Data: true,
            Result: DocToUpdate
        })
    } catch (error) {

    }
}

const DeleteProductById = async (req, res) => {
    try {
        const Id = req.params._id;
        const DocToDelete = await ProductModel.updateOne(
            { _id:Id },
            { $set:{softDeleteStatus:1} }
            );
            // const docToDelete = await ProductModel.deleteOne(
            //     { _id:Id }
            // )
        res.json({
            Message: 'Document Deleted Successfuly',
            Data: true,
            Result: DocToDelete
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}

const HardDelete = async (req, res) => {
    try {
        const Id = req.params._id;
        const docToget = await ProductModel.findOne({_id:Id}).lean();
       
        if(!!docToget){
            const docToDelete = await ProductModel.deleteOne({
                _id:docToget._id
            })
            docToget.imageDetaisl.forEach(pathOfFiles => {
                fs.unlinkSync(`${pathOfFiles.ImageUrl}`);
            })
            fs.rmdirSync(`../assets/Product/${docToget.productName}`);
            res.json({
                Message:'Deleted',
                Data:true,
                Result:docToDelete
            })
        }else{
            res.json({
                Message:'Not Deleted',
                Data:true,
                Result:null
            })
        }
    } catch (error) {
        res.json({
            Message: error,
            Result: null,
            Data: false
        })
    }
}

const UpdateById = async (req, res) => {
    try {
        const Id =  req.body._id;
        const payLoad = req.body;
        const docToUpdate = await ProductModel.updateOne(
            {_id:Id},
            payLoad
            )
            res.json({
                Message:'Updated Successfuly',
                Data:true,
                Result:docToUpdate
            })
    } catch (error) {
        res.json({
            Message: error,
            Result: null,
            Data: false
        })
    }
}

const updateProductImageById = async (req, res) => {
    const {id,newImageDetails,oldImageDetails} = req.body;
    const docToGet = await ProductModel.findOne({_id:id});
    //oldImageDetails ko delete from db and fs.unlink
    //newImageDetails ko add karo imageDetails ke array then multer use kar k assets main sgtore karo

}

const GetProductById = async (req, res) => {
    try {
        const Id = req.params._id;
        const docToFind = await ProductModel.findOne(
            { _id:Id },
            // { status:1 } Projection
        )
        res.json({
            Message:'Data Found Successfuly',
            Data:true,
            Result:docToFind
        })
    } catch (error) {
        res.json({
            Message: error.mesage,
            Result: null,
            Data: false
        })
    }
}

module.exports = {
    ProductData,
    GetProductData,
    UpdateMyProductData,
    DeleteProductById,
    GetProductById,
    HardDelete,
    UpdateById
}