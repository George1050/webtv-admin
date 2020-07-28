package com.webtv.tvonline.repository;

import com.webtv.tvonline.model.Programa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProgramaRepository extends JpaRepository<Programa, Long> {
}
