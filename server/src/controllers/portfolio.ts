import { NextFunction, Request, Response } from "express";
import SingleAlbum from "../models/album";

export const createAlbum = async(req:Request,res:Response,next:NextFunction) =>{

    const albumType = req.body.albumType;
    const albumTitle = req.body.albumTitle;
    const albumHeaderImg = req.body.albumHeaderImg;
    const images:[] = req.body.images;

    if(!albumType || !albumTitle || !albumHeaderImg || !images){
        res.status(400).send("you are missing some required properties");
        return
    }

    const album = new SingleAlbum({
        albumType:albumType,
        albumTitle:albumTitle,
        albumHeaderImg:albumHeaderImg,
        images:images,
        isActive:true
    });


    try {

        const albumCreateResponse = await album.save();
        res.sendStatus(200);
        return;
        
    } catch (error) {
        res.status(500).send("creating single album internall server errro");
        return
    }
}


export const getAllSingleAlbums = async(req:Request,res:Response,) =>{

    try {

        const albums = await SingleAlbum.find();

        res.status(200).send(albums.map(
            
            (singleAlbum)=> { return{
                type:singleAlbum.albumType,
                desc:singleAlbum.albumTitle,
                imgUrl:singleAlbum.albumHeaderImg,
                id:singleAlbum._id
            }}
    
    ));
        return;
        
    } catch (error) {
        res.status(500).send("Fetching all single album internall server errro");
        return
    }
}


export const getSingleAlbumById = async(req:Request,res:Response)  =>{

    const albumId = req.params.id;



    try {

        const singleAlbum = await SingleAlbum.findById(albumId);
        res.status(200).json(singleAlbum);
        return;
        
    } catch (error) {
        res.status(500).send("Single ALbum Fetching internall server error");
        return
    }
}