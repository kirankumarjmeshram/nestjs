import { Controller, Get, Param } from '@nestjs/common';
import * as data from '../database.json';

@Controller('albums')
export class AlbumsController {
  @Get()
  findAll() {
    return data.albums;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return data.albums.find(album => album.id === +id);
  }
}
