//Hook para deletar relatório por id
import { useState, useEffect } from "react";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";

export function useDeleteReportsId(id: string) {
  const db = getFirestore();
    const deleteReportId = async () => {
      await deleteDoc(doc(db, "reportsV2", id));
    };
    deleteReportId();
}
