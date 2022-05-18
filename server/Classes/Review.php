<?php

class Review
{
    private int $id;
    private int $userId;
    private int $movieId;
    private string $date;
    private string $comment;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Review
     */
    public function setId(int $id): Review
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return int
     */
    public function getUserId(): int
    {
        return $this->userId;
    }

    /**
     * @param int $userId
     * @return Review
     */
    public function setUserId(int $userId): Review
    {
        $this->userId = $userId;
        return $this;
    }

    /**
     * @return int
     */
    public function getMovieId(): int
    {
        return $this->movieId;
    }

    /**
     * @param int $movieId
     * @return Review
     */
    public function setMovieId(int $movieId): Review
    {
        $this->movieId = $movieId;
        return $this;
    }

    /**
     * @return string
     */
    public function getDate(): string
    {
        return $this->date;
    }

    /**
     * @param string $date
     * @return Review
     */
    public function setDate(string $date): Review
    {
        $this->date = $date;
        return $this;
    }

    /**
     * @return string
     */
    public function getComment(): string
    {
        return $this->comment;
    }

    /**
     * @param string $comment
     * @return Review
     */
    public function setComment(string $comment): Review
    {
        $this->comment = $comment;
        return $this;
    }

}
