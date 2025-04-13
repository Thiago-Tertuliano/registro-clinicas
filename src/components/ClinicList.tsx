'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Location } from 'src/services/maps';
import Link from 'next/link';

interface Clinic {
  id: string;
  name: string;
  address: string;
  contact: string;
  services: string;
}

const ClinicList = () => {
  const [clinics, setClinics] = useState<Clinic[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock Data
    const mockClinics: Clinic[] = [
      {
        id: '1',
        name: 'City Vet Clinic',
        address: '123 Main St, Anytown',
        contact: '555-1234',
        services: 'General check-ups, vaccinations',
      },
      {
        id: '2',
        name: 'Pet Health Center',
        address: '456 Oak Ave, Anytown',
        contact: '555-5678',
        services: 'Dental care, surgery',
      },
    ];

    setTimeout(() => {
      setClinics(mockClinics);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-5 w-40" />
                </CardTitle>
                <CardDescription>
                  <Skeleton className="h-4 w-24" />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          ))}
      </div>
    );
  }

  if (!clinics) {
    return <p>No clinics registered.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {clinics.map((clinic) => (
        <Card key={clinic.id}>
          <CardHeader>
            <CardTitle>{clinic.name}</CardTitle>
            <CardDescription>{clinic.address}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Services: {clinic.services}</p>
            <Link href={`/clinics/${clinic.id}`}>View Details</Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ClinicList;
