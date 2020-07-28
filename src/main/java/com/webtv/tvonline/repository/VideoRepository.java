package com.webtv.tvonline.repository;

import com.webtv.tvonline.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VideoRepository extends JpaRepository<Video, Long> {
    Video findByTitulo(String titulo);
}
