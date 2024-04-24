package com.book.socialnetwork.common;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PageResponse<T> {

    private List<T> content;
    private int pageNumber;
    private int sizeOfEachPage;
    private long totalElement;
    private int totalPage;
    private boolean firstPage;
    private boolean lastPage;
}
