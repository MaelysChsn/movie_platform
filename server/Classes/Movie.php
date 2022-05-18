<?php

class Movie
{
    private int $id;
    private int $name;
    private string $creator;
    private string $published;
    private string $affiche;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Movie
     */
    public function setId(int $id): Movie
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return int
     */
    public function getName(): int
    {
        return $this->name;
    }

    /**
     * @param int $name
     * @return Movie
     */
    public function setName(int $name): Movie
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return string
     */
    public function getCreator(): string
    {
        return $this->creator;
    }

    /**
     * @param string $creator
     * @return Movie
     */
    public function setCreator(string $creator): Movie
    {
        $this->creator = $creator;
        return $this;
    }

    /**
     * @return string
     */
    public function getPublished(): string
    {
        return $this->published;
    }

    /**
     * @param string $published
     * @return Movie
     */
    public function setPublished(string $published): Movie
    {
        $this->published = $published;
        return $this;
    }

    /**
     * @return string
     */
    public function getAffiche(): string
    {
        return $this->affiche;
    }

    /**
     * @param string $affiche
     * @return Movie
     */
    public function setAffiche(string $affiche): Movie
    {
        $this->affiche = $affiche;
        return $this;
    }


}
