import file from "../models/file.js";
//import file from "../models/file.js"

export const uploadImage = async (request, response) => {
  const fileObj = {
    path: request.file.path,
    name: request.file.originalName,
  }

  try {
    const file = await file.create(fileObj);
    console.log(file);
    response
      .status(200)
      .json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: error.message });
  }
};

export const downloadImage=async(request,response)=>{
    try{
       const file= await file.findById(request.params.fileId);
       file.downloadCount++;

       await file.save()
       response.download(file.path,file.name);
    }catch (error){
      console.error(error.message)
      return response.status(500).json({error:error.message});
    }
}
