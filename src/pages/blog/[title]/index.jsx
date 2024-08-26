import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailBlogPage() {
    const { title } = useParams();

    return (
        <div>
            <h1>Detail Blog Page</h1>
            <h2>{title}</h2>
        </div>
    );
}