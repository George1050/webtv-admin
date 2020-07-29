package com.webtv.tvonline.service;

import com.webtv.tvonline.model.Video;
import com.webtv.tvonline.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoService {
    private VideoRepository videoRepository;

    @Autowired
    public void setVideoRepository(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }

    public List<Video> findALl(){
        return videoRepository.findAll();
    }

    public Video save(Video video){
        return videoRepository.save(video);
    }

    public Video getOne(Long id){
        return videoRepository.findById(id).get();
    }

    public Video findByTitulo(String titulo){
        return videoRepository.findByTitulo(titulo);
    }

    public void delete(Long id){
        videoRepository.deleteById(id);
    }

}
