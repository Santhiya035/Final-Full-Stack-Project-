package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Library;


@Repository
//Interface extending the JPARepository Interface
public interface LibraryRepository extends JpaRepository<Library,Integer> {

	List<Library> findByBookNameContaining(String bookName);

	List<Library> findByjournalId(int journalId);

}
