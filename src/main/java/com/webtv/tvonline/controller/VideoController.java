package com.webtv.tvonline.controller;

import com.webtv.tvonline.model.Video;
import com.webtv.tvonline.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", exposedHeaders = "X-Total-Count")
public class VideoController {

    private VideoService videoService;

    @Autowired
    public void setService(VideoService videoService) {
        this.videoService = videoService;
    }

    @GetMapping(value = "/video")
    public List<Video> findALl(){
        return videoService.findALl();
    }

    @GetMapping(value = "/video/{titulo}")
    public Video findByTitulo(@PathVariable(name = "titulo") String titulo){
        return videoService.findByTitulo(titulo);
    }

    @PostMapping(value = "/video")
    public Video create(@RequestBody Video video, HttpServletResponse response){
        response.setStatus(201);
        video.setData(LocalDate.now());
        return videoService.save(video);
    }

    @DeleteMapping(value = "/video/{id}")
    public void delete(@PathVariable(name = "id") Long id){
        videoService.delete(id);
    }
}
