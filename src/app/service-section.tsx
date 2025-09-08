import {
    Button,
    Card,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import {
    IconCircleOff,
    IconDroplet,
    IconEngine,
    IconFiretruck,
    IconSnowflake,
    IconTools,
} from "@tabler/icons-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Ganti Oli & Perawatan",
      description:
        "Penggantian oli rutin, filter, dan perawatan preventif untuk menjaga performa mesin.",
      icon: <IconDroplet size={36} color="var(--mantine-color-blue-6)" />,
    },
    {
      title: "Perbaikan & Servis Rem",
      description:
        "Inspeksi menyeluruh, penggantian kampas, dan perbaikan sistem pengereman.",
      icon: <IconCircleOff size={36} color="var(--mantine-color-blue-6)" />,
    },
    {
      title: "Diagnostik Mesin",
      description:
        "Analisis komputer modern untuk mendeteksi masalah performa mesin dengan akurat.",
      icon: <IconEngine size={36} color="var(--mantine-color-blue-6)" />,
    },
    {
      title: "Servis Transmisi",
      description:
        "Ganti oli transmisi, perbaikan, hingga rebuild untuk kinerja optimal.",
      icon: <IconTools size={36} color="var(--mantine-color-blue-6)" />,
    },
    {
      title: "Perbaikan AC & Pemanas",
      description:
        "Perbaikan sistem pendingin dan pemanas agar perjalanan selalu nyaman.",
      icon: <IconSnowflake size={36} color="var(--mantine-color-blue-6)" />,
    },
    {
      title: "Layanan Ban",
      description:
        "Pemasangan, rotasi, balancing, dan spooring dengan peralatan modern.",
      icon: <IconFiretruck size={36} color="var(--mantine-color-blue-6)" />,
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: "100px 16px",
        background: "var(--mantine-color-gray-9)",
      }}
    >
      <Container size="lg">
        <Stack align="center" mb={50} gap="xs">
          <Title order={2} style={{ fontSize: "2rem", fontWeight: 800 }}>
            Layanan Otomotif Lengkap
          </Title>
          <Text size="lg" c="dimmed" ta="center" maw={650}>
            Dari perawatan rutin hingga perbaikan besar, kami siap menangani
            semua kebutuhan otomotif Anda dengan presisi dan kepedulian.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {services.map((service, i) => (
            <Card
              key={i}
              withBorder
              shadow="md"
              padding="xl"
              radius="lg"
              style={{
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--mantine-shadow-sm)";
              }}
            >
              <Stack gap="sm" align="flex-start">
                {service.icon}
                <Title order={4}>{service.title}</Title>
                <Text c="dimmed" size="sm">
                  {service.description}
                </Text>
                <Button variant="light" color="blue" radius="xl" size="sm">
                  Pelajari Lebih Lanjut
                </Button>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
