package com.example.demo.controlle;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exceptionHandling.ResourceNotFoundException;
import com.example.demo.model.Library;
import com.example.demo.repository.LibraryRepository;

@CrossOrigin(origins = "http://localhost:4200") 
@RestController//@ResponseBody and @Controller
@RequestMapping("/RestAPIproject/")


public class LibraryController {
	@Autowired
	private LibraryRepository libraryRepository;
	
	// Mapping to save the record into the table
	@GetMapping("/books")
	public ResponseEntity<List<Library>> getAllBooks(@RequestParam(required = false)String bookName){
		try {
			List<Library> bookList =new ArrayList<Library>();
			if(bookName!=null) {
				libraryRepository.findByBookNameContaining(bookName).forEach(bookList::add);
				return new ResponseEntity<>(bookList,HttpStatus.OK);
			}
			else {
				bookList = libraryRepository.findAll();
				return new ResponseEntity<>(bookList,HttpStatus.OK);
			}
		}catch(Exception e){
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}	

	// create library rest api
	@PostMapping("/books")
	public Library createLibraryRecords(@RequestBody Library library) {
		return libraryRepository.save(library);
	}

	// Mapping to read a particular record using the bookId
	@GetMapping("/books/{BookId}")
	public ResponseEntity<Library> searchById(@PathVariable int BookId) {
		Library library = libraryRepository.findById(BookId)
				.orElseThrow(() -> new ResourceNotFoundException("Book not exist with id :" + BookId));
		return ResponseEntity.ok(library);
	}
	
	// get library by deptid rest api
	/*@GetMapping("/books/{JournalId}")
	public ResponseEntity<Library> searchByDeptId(@PathVariable int JournalId) {
		Library library = libraryRepository.findById(JournalId)
				.orElseThrow(() -> new ResourceNotFoundException("Book not exist with id :" + JournalId));
		return ResponseEntity.ok(library);
	}*/

	// Mapping to update a record in the table
	@PutMapping("/books/{BookId}")
	public ResponseEntity<Library> updateBookDetails(@PathVariable int BookId, @RequestBody Library libraryRecordDetails){
		Library library = libraryRepository.findById(BookId)
				.orElseThrow(() -> new ResourceNotFoundException("Book not exist with id :" + BookId));

		library.setBookName(libraryRecordDetails.getBookName());
		library.setAuthorName(libraryRecordDetails.getAuthorName());
		library.setJournal(libraryRecordDetails.getJournal());
		library.setJournalId(libraryRecordDetails.getJournalId());
		library.setEdition(libraryRecordDetails.getEdition());
		library.setNoOfCopies(libraryRecordDetails.getNoOfCopies());
	

		Library updatedRecords = libraryRepository.save(library);
		return ResponseEntity.ok(updatedRecords);
	}

	//Mapping to delete a particular record using the bookId 
	@DeleteMapping("/books/{BookId}")
	public ResponseEntity<Map<String, Boolean>> deleteRecord(@PathVariable int BookId){
		 Library library = libraryRepository.findById(BookId)
				.orElseThrow(() -> new ResourceNotFoundException("Book not exist with id :" + BookId));

		 libraryRepository.delete(library);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	// delete all records
	@DeleteMapping("/books")
	public ResponseEntity<HttpStatus> deleteAllBooks(){
		try {
			libraryRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//get book by Technical journal
	@GetMapping("/books/findbyTechnical")
	public ResponseEntity<List<Library>> viewTechnical() { 
		try {
			List<Library> deptBookList=libraryRepository.findByjournalId(5);
			if(deptBookList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(deptBookList, HttpStatus.OK);
			}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}	
	}
	
	//get book by Fantacy journal
	@GetMapping("/books/findbyFantacy")
	public ResponseEntity<List<Library>> viewFantacy() { 
		try {
			List<Library> deptBookList=libraryRepository.findByjournalId(4);
			if(deptBookList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(deptBookList, HttpStatus.OK);
			}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}

	}
	
	//get book by Inspiration journal
	@GetMapping("/books/findbyInspiration")
	public ResponseEntity<List<Library>> viewInspiration() { 
		try {
			List<Library> deptBookList=libraryRepository.findByjournalId(3);
			if(deptBookList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(deptBookList, HttpStatus.OK);
			}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}

	}
	
	//get book by Mystery journal
	@GetMapping("/books/findbyMystery")
	public ResponseEntity<List<Library>> viewMystery() { 
		try {
			List<Library> deptBookList=libraryRepository.findByjournalId(2);
			if(deptBookList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(deptBookList, HttpStatus.OK);
			}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}

	}
	
	//get book by Comedy journal
	@GetMapping("/books/findbyComedy")
	public ResponseEntity<List<Library>> viewComedy() { 
		try {
			List<Library> deptBookList=libraryRepository.findByjournalId(1);
			if(deptBookList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(deptBookList, HttpStatus.OK);
			}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}

	}

}
