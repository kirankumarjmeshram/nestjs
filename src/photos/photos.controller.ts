import { Controller, Get, Param } from '@nestjs/common';
import * as data from '../database.json';

@Controller('photos')
export class PhotosController {
  @Get()
  findAll() {
    // Returning all photos
    return data.photos;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // Finding a photo by its id, using unary + to cast the string id to a number
    const photo = data.photos.find(photo => photo["id"] === +id);
    if (!photo) {
      return { message: `Photo with id ${id} not found` }; // Handling case when no photo is found
    }
    return photo;
  }
}
